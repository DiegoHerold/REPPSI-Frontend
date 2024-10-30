import { extendTheme } from '@chakra-ui/react';

const themes = {
  violet: {
    primary: {
      100: '#E9D8FD', // Lavanda clara
      200: '#D6BCFA', // Violeta claro
      300: '#B794F4', // Violeta médio
      400: '#805AD5', // Roxo
      500: '#6B46C1', // Roxo escuro
      600: '#87CEFA',  // Azul Claro
    },
    secondary: {
      100: '#FFF2F1', // Fundo claro
      200: '#A09BE7', // Violeta suporte
      300: '#FF686B', // Coral para destaque
      400: '#808080',  // Quase Preto
    },
  },
  blue: {
    primary: {
      100: '#CCE7FF', // Azul claro
      200: '#99D1FF', // Azul suave
      300: '#66BBFF', // Azul médio
      400: '#3399FF', // Azul forte
      500: '#0077FF', // Azul escuro
    },
    secondary: {
      100: '#E0F7FF', // Fundo azul claro
      200: '#99EBFF', // Destaque azul suave
    },
  },
  green: {
    primary: {
      100: '#D4EDDA', // Verde claro
      200: '#A7DAB7', // Verde médio
      300: '#7BC794', // Verde folha
      400: '#4EB372', // Verde forte
      500: '#28A745', // Verde escuro
    },
    secondary: {
      100: '#E8F5E9', // Fundo verde claro
      200: '#C8E6C9', // Destaque verde suave
    },
  },
  blackAndWhite: {
    primary: {
      100: '#F0F0F0', // Branco suave
      200: '#D9D9D9', // Cinza claro
      300: '#A6A6A6', // Cinza médio
      400: '#595959', // Cinza escuro
      500: '#333333', // Preto suave
      600: '#000000', // Preto total
    },
    secondary: {
      100: '#FFFFFF', // Fundo branco
      200: '#CCCCCC', // Destaque cinza claro
    },
  },
  coral: {
    primary: {
      100: '#FFDAC1', // Coral claro
      200: '#FFBDA5', // Coral suave
      300: '#FF9980', // Coral médio
      400: '#FF6347', // Coral forte
      500: '#FF4500', // Coral escuro
    },
    secondary: {
      100: '#FFF5F0', // Fundo coral claro
      200: '#FFD6CC', // Destaque coral suave
    },
  },
  gray: {
    primary: {
      100: '#F2F2F2', // Cinza claro
      200: '#E6E6E6', // Cinza médio claro
      300: '#CCCCCC', // Cinza médio
      400: '#B3B3B3', // Cinza forte
      500: '#808080', // Cinza escuro
      600: '#666666', // Cinza profundo
    },
    secondary: {
      100: '#FAFAFA', // Fundo cinza claro
      200: '#E0E0E0', // Destaque cinza suave
    },
  },
};

// Função para retornar o tema escolhido
export const getTheme = (selectedTheme) => {
  return extendTheme({
    colors: themes[selectedTheme] || themes.violet, // O tema padrão é o violeta
    fonts: {
      heading: "'Roboto', sans-serif",
      body: "'Open Sans', sans-serif",
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: 'lg',
        },
        variants: {
          solid: {
            bg: 'primary.400',
            color: 'white',
            _hover: {
              bg: 'primary.500',
            },
          },
          outline: {
            borderColor: 'primary.400',
            color: 'primary.400',
            _hover: {
              bg: 'primary.100',
            },
          },
        },
      },
    },
  });
};
