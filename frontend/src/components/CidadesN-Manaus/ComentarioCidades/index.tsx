
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
  "destinos_id": number,
};

const validationSchema = yup.object({
  nome: yup.string().required("Valor é requerido"),
  email: yup.string().email("Email inválido").required("Valor é requerido"),
  mensagem: yup.string().max(281, "Quantidade máxima ultrapassada").required("Valor é requerido")
})

const ComentarioCidades: React.FC = () => {

  const [show, setShow] = useState(false);
  const [comentario, setComentarios] = useState<Comentarios[]>([]);
  const destinos_id = window.location.search.split('/').length;

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      mensagem: ''
    },
    validationSchema,
    onSubmit: async (values, {resetForm}) => {
      const resposta = await postComentario({ nome: values.nome, email: values.email, mensagem: values.mensagem, destinos_id: destinos_id});

      if (resposta.status == 201 || resposta.status == 200) {
        setShow(true);
        setComentarios(pComentarios => [...pComentarios, resposta.data])
        resetForm()
      }
    },
  });


  const carregarComentarios = async () => {
    const resposta = await getComentarios();
    setComentarios(resposta);
  }

  useEffect(() => {
    carregarComentarios()
  }, []);


  return (

    <div className='main-form-cidades'>
      <div id='borda'></div>
      <div className='comentarios'>
        <h3>Comentários</h3>
        <div className='comentario-cidades'>
          {comentario.map((comentario: Comentarios) => (
            <div>
              <h5>{comentario.nome}</h5>
              <p>{comentario.mensagem}</p>
            </div>
          )).reverse()}
        </div>
      </div>


      <div className='form-comentario-cidades'>
        <Form onSubmit={formik.handleSubmit}>
          <h3>Deixe o seu comentário sobre esse conteúdo:</h3>
          <Form.Group className="mb-3 " controlId="nome">
            <Form.Label style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
              }}>Nome</Form.Label>
            <Form.Control type="text"
              placeholder="Digite aqui o seu nome..."
              style={{
                height: '50px',
                borderRadius: '30px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '16px',
              }}
              value={formik.values.nome}
              onChange={formik.handleChange} />
            {formik.errors.nome && <span>{formik.errors.nome}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
              }}>E-mail</Form.Label>
            <Form.Control type="email"
              placeholder="Digite aqui o seu e-mail..."
              style={{
                height: '50px',
                borderRadius: '30px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '16px',
              }}
              value={formik.values.email}
              onChange={formik.handleChange} />
            {formik.errors.email && <span>{formik.errors.email}</span>}
          </Form.Group>

          <div>

            <Form.Group className="mb-3 " controlId="mensagem">
              <Form.Label style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
              }}>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5}
                placeholder="Digite aqui sua mensagem até 280 caracteres..."
                style={{ 
                  borderRadius: '30px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '16px',
              }}
                value={formik.values.mensagem}
                onChange={formik.handleChange} />
              {formik.errors.mensagem && <span>{formik.errors.mensagem}</span>}
            </Form.Group>
          </div>

          <div className='form-comentario-btn'>
            <Button style={{
              width: '8rem',
              height: '3rem',
              borderRadius: '30px',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
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