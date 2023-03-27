import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="C:\Users\TMadd\snapshot-tests\src\WIN_20221006_00_01_37_Pro.jpg" />
      <Card.Body>
        <Card.Title>Tmaddox86</Card.Title>
        <Card.Text>
          My name is Tara. I'm 38 years old, I have two daughters.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;