const Container = styled.div`
  display: flex;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const ImgContainer = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  width: 32vw;
  /* background-color: #ffffff; */
  position: relative;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 10vh;
  margin-bottom: 7vh;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 60px;
  position: absolute;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
`;

const Description = styled.div`
  position: absolute;
  top: 140px;
`;

const FormContainer = styled.div`
  width: 30vw;
`;

export const AddPlaza = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    httpClient.post('/registro', { form }).then(() => {
      navigate('/login');
    });
  };
  return (
    <Container>
      <ImgContainer>
        <a name="about-us"></a>
        <Image src={fondo3} />
      </ImgContainer>
      <DescriptionContainer>
        <Title>Add plaza</Title>
        <Description>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Input
                type="number"
                name="prize"
                id="prize"
                label="Prize"
                onChange={handleChange}
              ></Input>
              <Input
                type=""
                name="password"
                id="password"
                label="Password"
                onChange={handleChange}
              ></Input>
              <Input
                exp={
                  /^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{2}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{0,17}[A-Za-zñáéíóúÁÉÓÍÚÑçÇ]{1}$/
                }
                type="text"
                name="name"
                id="name"
                label="Name"
                onChange={handleChange}
              ></Input>
              <Input
                exp={/^[A-Za-zñáéíóúÁÉÓÍÚÑçÇ -]{3,20}$/}
                type="text"
                name="surname"
                id="surname"
                label="Surname"
                onChange={handleChange}
              ></Input>
              <Input
                type="date"
                name="date"
                id="date"
                label="Born date"
                onChange={handleChange}
              ></Input>
              <Input
                exp={
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                }
                type="email"
                name="email"
                id="email"
                label="Email"
                onChange={handleChange}
              ></Input>
              <Input
                exp={/^[6-9]\d\d{3}\d{2}\d{2}$/}
                type="tel"
                name="telephone"
                id="telephone"
                label="Telephone"
                onChange={handleChange}
              ></Input>

              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </FormContainer>
        </Description>
      </DescriptionContainer>
    </Container>
  );
};
