import Section from "./Section";
import styled from "styled-components";
import { sectionCars } from "../../data";
function Home() {
  return (
    <Container>
      {sectionCars.map((car) => (
        <Section key={car.id} {...car} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
