import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from '@material-ui/core';

const words = [
  {
    id: '1',
    word: 'Memphis'
  },
  {
    id: '2',
    word: 'Ability'
  },
  {
    id: '3',
    word: 'Book'
  }
];

const Keyword = () => (
  <Card sx={{ height: '100%' }}>
    <CardHeader title="Keyword" />
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Your rehearsal is match with those topics.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word) => (
            <TableRow hover key={word.id}>
              <TableCell>{word.word}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Card>
);

export default Keyword;
