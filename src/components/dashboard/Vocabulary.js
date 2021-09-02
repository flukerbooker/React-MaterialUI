import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const words = [
  {
    id: '1',
    word: 'Capitalization',
    partOfSpeech: 'Noun'
  },
  {
    id: '2',
    word: 'Research',
    partOfSpeech: 'Noun'
  },
  {
    id: '3',
    word: 'Potential',
    partOfSpeech: 'Noun'
  },
  {
    id: '4',
    word: 'Percentage',
    partOfSpeech: 'Noun'
  }
];

const Vocabulary = () => (
  <Card>
    <CardHeader
      title="Vocabulary"
      action={
        <Button color="primary" size="small" variant="text">
          Show more
        </Button>
      }
    />
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell align="right">Part of Speech</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word) => (
            <TableRow hover key={word.id}>
              <TableCell>{word.word}</TableCell>
              <TableCell align="right">{word.partOfSpeech}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Card>
);

export default Vocabulary;
