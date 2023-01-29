import { Button, Out } from './Button.styled';
export const ClearButton = () => {
  return <Button type="button">Clear</Button>;
};

export const SubmitButton = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

// Кнопки для модалки
export const LogOutButton = ({ children, dispatch, closeModal }) => {
  const handleClick = () => {
    if (children === 'Yes') {
      dispatch();
      closeModal();
    }
  };

  return <Out onClick={handleClick}>{children}</Out>;
};

export const DismissButton = ({ children, closeModal }) => {
  return <Button onClick={closeModal}>{children}</Button>;
};
