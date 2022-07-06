
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from "yup";
import { getComentarios, postComentario } from '../../../services/MainAPI/comentario';
import { Container, Toast, Button } from 'react-bootstrap';
import './comentario-cidades.css';

interface Comentarios {
  "nome": string,
  "email": string,
  "mensagem": string,
};

const validationSchema = yup.object({
  nome: yup.string().required("Valor é requerido"),
  email: yup.string().email("Email inválido").required("Valor é requerido"),
  mensagem: yup.string().min(50, "Quantidade mínima requerida").max(281, "Quantidade máxima ultrapassada").required("Valor é requerido")
})

const ComentarioCidades: React.FC = () => {

  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      mensagem: ''
    },
    validationSchema,
    onSubmit: async values => {
      const resposta = await postComentario({ nome: values.nome, email: values.email, mensagem: values.mensagem });

      if (resposta == 201 || resposta == 200) {
        setShow(true);
      }
    },
  });

  const [comentario, setComentarios] = useState<Comentarios[]>([]);

  const carregarComentarios = async () => {
    const resposta = await getComentarios();
    setComentarios(resposta);
  }

  useEffect(() => {
    carregarComentarios()
  }, []);


  return (

    <div className='main-cidades'>
      <div id='borda'></div>


      <div className='comentario-cidades'>
        <h3>Comentários</h3>
        {comentario.map((comentario: Comentarios) => (
        <div>
          <h5>{comentario.nome}</h5>
          <p>{comentario.mensagem}</p>
        </div>
        )).reverse()}
      </div>


      <div className='form-comentario-cidades'>
        <Form onSubmit={formik.handleSubmit}>
          <h3>Deixe o seu comentário sobre esse conteúdo:</h3>
          <Form.Group className="mb-3 " controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"
              placeholder="Digite aqui o seu nome..."
              style={{
                height: '50px',
                borderRadius: '30px'
              }}
              defaultValue={formik.values.nome}
              onChange={formik.handleChange} />
            {formik.errors.nome && <span>{formik.errors.nome}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email"
              placeholder="Digite aqui o seu e-mail..."
              style={{
                height: '50px',
                borderRadius: '30px'
              }}
              defaultValue={formik.values.email}
              onChange={formik.handleChange} />
            {formik.errors.email && <span>{formik.errors.email}</span>}
          </Form.Group>

          <div>

            <Form.Group className="mb-3 " controlId="mensagem">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5}
                placeholder="Digite aqui sua mensagem até 280 caracteres..."
                style={{ borderRadius: '30px' }}
                defaultValue={formik.values.mensagem}
                onChange={formik.handleChange} />
              {formik.errors.mensagem && <span>{formik.errors.mensagem}</span>}
            </Form.Group>
          </div>

          <div className='form-comentario-btn'>
            <Button style={{
              width: '128.08px',
              height: '7vh',
              borderRadius: '30px',
              boxShadow: ' 1px 5px 5px black',
              fontStyle: 'bold',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
              variant="warning" type="submit">
              Enviar
            </Button>
          </div>

        </Form>
      </div>
      <Container className='conteudo d-flex justify-content-start'>
        <Toast className='notificacao' onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <div className='conteudo-toast'>
            <Toast.Header></Toast.Header>
            <Toast.Body className='mensagem-notificacao'>Comentário enviado!</Toast.Body>
          </div>
        </Toast>
      </Container>
    </div>

  );
}

export default ComentarioCidades;