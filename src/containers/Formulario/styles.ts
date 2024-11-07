import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  input,
  textarea {
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
    cursor: pointer;
  }

  input[type='radio'] {
    cursor: pointer;
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 2px solid #666;
    position: relative;
    top: 4px;
    transition: 0.5s border ease-in-out;

    &:checked {
      border: 8px solid #666;
    }
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
