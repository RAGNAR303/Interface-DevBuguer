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
import { useUser } from '../../hooks/UserContext';
import { EnvelopeSimpleIcon, LockSimpleIcon } from '@phosphor-icons/react';

export function Login() {
  const navigate = useNavigate();

  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Coloque um e-mail válido')
        .required('O E-mail e obrigatório'),
      password: yup
        .string()
        .min(8, 'A Senha deve ter no 8 caracteres')
        .required('Senha e obrigatório'),
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
      const { status, data: userData } = await api.post(
        '/session',
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          if (userData.admin) {
            navigate('/admin/pedidos');
          } else {
            navigate('/');
          }
          console.log({ userData });
        }, 2000);
        toast.success('Login realizado com sucesso');
      } else if (status === 401) {
        toast.error('Usuário não cadastrado!, Se cadastre para continuar  ');
      } else throw new Error();
      console.log(userData);
      putUserData(userData);

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Erro no servidor! , Tente novamente!');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Logo src={LogoPng} alt="logo-burgerKing" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu{' '}
          <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Entrar</Button>
          <p>
            Não possui conta? <Link to={'/cadastro'}>Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
