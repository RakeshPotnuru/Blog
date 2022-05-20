import {
  Code,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { CustomCode } from './';

const MarkdownRenderer = ({ content }) => {
  return (
    <Container maxW={'container.sm'}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => <Heading my={2} size='lg' {...props} />,
          h3: (props) => <Heading my={2} size='md' {...props} />,
          p: (props) => <Text my={4} color={'textColor'} {...props} />,
          ul: (props) => <UnorderedList my={4} {...props} />,
          ol: (props) => <OrderedList my={4} {...props} />,
          li: ListItem,
          hr: Divider,
          a: (props) => (
            <Link href={props.href} color={'brand.50'} isExternal>
              {props.children}
              <ExternalLinkIcon />
            </Link>
          ),
          img: (props) => (
            <Image
              my={4}
              src={props.src}
              alt={props.alt}
              shadow={'lg'}
              {...props}
            />
          ),
          code: CustomCode,
          table: (props) => (
            <Table my={4} variant='striped' colorScheme={'gray'} {...props} />
          ),
          thead: Thead,
          tr: Tr,
          th: Th,
          tbody: Tbody
        }}
      >
        {content}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkdownRenderer;