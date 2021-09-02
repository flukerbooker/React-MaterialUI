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
    word: 'Book',
    total: 6
  },
  {
    id: '2',
    word: 'Think',
    total: 6
  },
  {
    id: '3',
    word: 'Memphis',
    total: 6
  },
  {
    id: '4',
    word: 'Thing',
    total: 5
  }
];

const RepetitionWords = () => (
  <Card>
    <CardHeader
      title="Repetition Words"
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
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word) => (
            <TableRow hover key={word.id}>
              <TableCell>{word.word}</TableCell>
              <TableCell align="right">{word.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Card>
);

export default RepetitionWords;
