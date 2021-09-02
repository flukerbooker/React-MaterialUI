import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import reactStringReplace from 'react-string-replace';

import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const sentences = [
  {
    id: uuid(),
    sentence:
      'It is a real pleasure to be here %HESITATION you know I I dont work in an office I work at home and I I forget what offices are like it I was around the corner and I %HESITATION I saw this big',
    started_timestamp: '00:01:97',
    ended_timestamp: '00:13:65'
  },
  {
    id: uuid(),
    sentence: 'Open refrigerator with all kinds of the',
    started_timestamp: '00:14:57',
    ended_timestamp: '00:16:77'
  },
  {
    id: uuid(),
    sentence: 'like how cool is that %HESITATION',
    started_timestamp: '00:19:11',
    ended_timestamp: '00:20:69'
  },
  {
    id: uuid(),
    sentence:
      'Hi am I at so with all my new book which %HESITATION you know there are many things that I can see all kinds of %HESITATION things about it but I I thought I would talk about an idea that is actually not in the book but %HESITATION that I have been thinking about a lot %HESITATION since writing it and which %HESITATION encapsulates a lot of what the book is about and it some',
    started_timestamp: '00:21:88',
    ended_timestamp: '00:42:54'
  }
];

const Transcript = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="Transcript" />
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sentences</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sentences.map((sentence) => (
                <TableRow hover key={sentence.id}>
                  <TableCell>
                    {reactStringReplace(
                      sentence.sentence,
                      '%HESITATION',
                      (match, i) => (
                        <span key={i} style={{ color: 'red' }}>
                          {match}
                        </span>
                      )
                    )}
                  </TableCell>
                  <TableCell>{sentence.started_timestamp}</TableCell>
                  <TableCell>{sentence.ended_timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default Transcript;
