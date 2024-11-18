import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome to Paral</h1>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}
