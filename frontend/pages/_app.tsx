import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { store } from '@redux/store';
import { Provider } from 'react-redux';
import '@assets/fonts/EN/inter.css';
import '@assets/fonts/KH/krasar.css';

const GlobalStyle = createGlobalStyle`
	${reset};
	body, html {
		overflow-x: hidden;
	}
	body {
		background-color: #FFFDFC;
	}
	* {
		font-family: "Inter", Arial, Helvetica, sans-serif !important;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
