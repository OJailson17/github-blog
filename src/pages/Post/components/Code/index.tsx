import { useEffect } from 'react';
import Prism from 'prismjs';

import '../../../../styles/theme/prismjs/nord.css';
import { CodeContainer } from './styles';

interface CodeProps {
	code: string;
	language: string;
}

export const Code = ({ code, language }: CodeProps) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<CodeContainer>
			<pre>
				<code className={`language-${language || 'javascript'}`}>{code}</code>
			</pre>
		</CodeContainer>
	);
};
