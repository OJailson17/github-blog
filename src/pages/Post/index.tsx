import { PageContainer, PageContent } from '../../styles/global';
import { Code } from './components/Code';
import { PostInfo } from './components/PostInfo';
import { PostContent } from './styles';

const codeString = `
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
`;

export const Post = () => {
	return (
		<PageContainer>
			<PageContent>
				<PostInfo />

				<PostContent>
					<p>
						Programming languages all have built-in data structures, but these
						often differ from one language to another. This article attempts to
						list the built-in data structures available in JavaScript and what
						properties they have. These can be used to build other data
						structures. Wherever possible, comparisons with other languages are
						drawn.
					</p>

					<a href='#' className='title'>
						Dynamic Typing
					</a>
					<p>
						JavaScript is a loosely typed and dynamic language. Variables in
						JavaScript are not directly associated with any particular value
						type, and any variable can be assigned (and re-assigned) values of
						all types:
					</p>

					{/* code */}
					<Code code={codeString} language='javascript' />
				</PostContent>
			</PageContent>
		</PageContainer>
	);
};
