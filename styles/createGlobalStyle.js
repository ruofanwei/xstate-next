import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
	background: rgb(242, 242, 242);
	color: #47597e;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: 800px;
	max-width: 96%;
	margin: 0 auto;
	margin-top: 5em;
}
a {
	color: #69C;
	text-decoration: none;
}
a:hover {
	color: #F60;
}
h1 {
	font: 1.7em;
	line-height: 110%;
	color: #000;
}
p {
	margin: 0 0 20px;
}
input {
	outline: none;

}
input[type=search] {
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none;
}
input[type=search] {
	background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
	border: solid 1px #ccc;
	padding: 9px 10px 9px 40px;
	width: 180px;

	-webkit-border-radius: 10em;
	-moz-border-radius: 10em;
	border-radius: 10em;

	-webkit-transition: all .5s;
	-moz-transition: all .5s;
	transition: all .5s;
}
input[type=search]:focus {
	width: 200px;
	background-color: #fff;
	border-color: #47597e;

	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	box-shadow: 0 0 5px rgba(109,207,246,.5);
}
input:-moz-placeholder {
	color: #47597e;
}
input::-webkit-input-placeholder {
	color: #47597e;
}
`

export default GlobalStyle
