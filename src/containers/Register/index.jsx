import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import {
  Container,
  LeftContainer,
  Logo,
  RightContainer,
  Title,
  Form,
  Link,
} from './styles';
import LogoPng from '../../assets/logo.png';
import { Button, Input } from '../../components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  EnvelopeSimpleIcon,
  LockSimpleIcon,
  UserIcon,
} from '@phosphor-icons/react';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é Obrigatório'),
      email: yup
        .string()
        .email('Coloque um e-mail válido')
        .required('O E-mail e obrigatório'),
      password: yup
        .string()
        .min(8, 'A Senha deve ter no 8 caracteres')
        .required('Senha e obrigatório'),
      ConfirmPassword: yup
        .string() // comparação do campos
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login para continuar');
      } else {
        throw new Error();
      }

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error(`Falha no sistema! Tente novamente`);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Logo src={LogoPng} alt="logo-burgerKing" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, Crie sua conta no <span>Dev Burguer!</span> Cadastre com suas
          <span> Informações.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            icon={<UserIcon size={20} weight="fill" />}
            placeholder={'Nome'}
            type={'text'}
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            icon={<EnvelopeSimpleIcon size={20} weight="fill" />}
            placeholder={'E-mail'}
            type={'email'}
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            icon={<LockSimpleIcon size={20} weight="fill" />}
            placeholder={'Senha'}
            type={'password'}
            error={errors.password?.message}
            {...register('password')}
          />
          <Input
            icon={<LockSimpleIcon size={20} weight="fill" />}
            placeholder={'Confirme a senha'}
            type={'password'}
            error={errors.ConfirmPassword?.message}
            {...register('ConfirmPassword')}
          />
          <Button type="submit">Cadastrar</Button>
          <p>
            Já possui conta? <Link to={'/login'}>Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
