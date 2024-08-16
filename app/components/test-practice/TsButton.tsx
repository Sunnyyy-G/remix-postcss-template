interface TsButtonProps {
  title: string;
  disabled: boolean;
}

export default function TsButton({title, disabled}: TsButtonProps) {
  return <button className='w-40 h-10 rounded-lg bg-blue-400 border-solid text-white border-01' type='button' disabled={disabled}>{title}</button>;
}