interface Props {
  color: 'red' | 'green';
  size: string;
}

const Circle: React.FC<Props> = ({ color, size }) => {
  return <div style={{ display: 'block', borderRadius: '50%', width: size, height: size, backgroundColor: color }} />;
};

export default Circle;
