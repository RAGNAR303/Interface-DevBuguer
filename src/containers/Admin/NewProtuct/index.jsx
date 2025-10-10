import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../../components';
import {
  Container,
  FormContainerLeft,
  FormContainerRight,
  SelectOptions,
  Form,
  Textarea,
  LabelUpload,
  SubmitButton,
  CustonStyle,
  InputCheck,
  InputContainer,
} from './styled';
import { CheckCircleIcon, ImageIcon, XCircleIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Selecione uma categoria'),
  description: yup
    .string()
    .max(255)
    .required('Coloque uma descrição ao produto'),
  offer: yup.bool(),
  file: yup
    .mixed()
    .test('required', 'Escolha um arquivo para continuar ', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'Carregue arquivos até 3mb', (value) => {
      return value && value.length > 0 && value[0].size <= 3000000;
      /* 
 3 MB = 3.000.000 bytes (na prática, 3 * 1024 * 1024 = 3.145.728 bytes). */
    })
    .test('type', 'Carregue apenas imagens PNG, JPG, JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/png' ||
          value[0].type === 'image/jpeg' ||
          value[0].type === 'image/jpg')
      );
    })
    .required(),
});

export function NewProtuct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // quando carrega a tela ele tras a info de categorias
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();
    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('description', data.description);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adcinando o Produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao adicionar o produto, tente novamente',
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainerLeft>
          <Input
            placeholder={'Produto'}
            type={'text'}
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            placeholder={'Preço'}
            type={'number'}
            error={errors.price?.message}
            {...register('price')}
          />
          <InputContainer>
            <Textarea
              placeholder={'Descrição'}
              {...register('description')}
            ></Textarea>
            <span>{errors.description?.message}</span>
          </InputContainer>
        </FormContainerLeft>
        <FormContainerRight>
          <InputContainer>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <SelectOptions
                  {...field}
                  styles={CustonStyle}
                  options={categories}
                  getOptionLabel={(category) => category.name}
                  getOptionValue={(category) => category.id}
                  placeholder="Categorias"
                  menuPortalTarget={document.body}
                />
              )}
            />
            <span>{errors.category?.message}</span>
          </InputContainer>
          <main>
            <InputContainer>
              <LabelUpload>
                <ImageIcon />
                <input
                  type="file"
                  {...register('file')}
                  accept="image/png , image/jpeg , image/jpg"
                  onChange={(value) => {
                    setFileName(value.target.files[0]?.name);
                    register('file').onChange(value);
                  }}
                />
                {fileName || 'Upload do Produto'}
              </LabelUpload>
              <span>{errors.file?.message}</span>
            </InputContainer>
            <InputContainer>
              <InputCheck>
                <Checkbox
                  icon={<XCircleIcon size={32} weight="fill" color="#cd0000" />}
                  checkedIcon={
                    <CheckCircleIcon size={32} weight="fill" color="#22cd00" />
                  }
                  {...register('offer')}
                />
                <label>Produto em Oferta?</label>
              </InputCheck>
              <span>{errors.offer?.message}</span>
            </InputContainer>
          </main>

          <SubmitButton type="submit">Adicionar Produto</SubmitButton>
        </FormContainerRight>
      </Form>
    </Container>
  );
}
