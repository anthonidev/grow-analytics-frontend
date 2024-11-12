type Props = {
  currency: string;
};

export const StartCurrency = ({ currency }: Props) => {
  return currency === 'USD' ? (
    <span className='text-default-500'>$</span>
  ) : (
    <span className='text-default-500'>S/</span>
  );
};
