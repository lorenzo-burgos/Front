import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

function Row() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ width: 50 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>P-produtor 1</TableCell>
        <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>P-produtor 2</TableCell>
        <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>P-Fazenda 1</TableCell>
        <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>P-Fazenda 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="example" tableLayout="fixed">
                <TableBody>
                  <TableRow>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-produtor 1</TableCell>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-produtor 2</TableCell>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-produtor 3</TableCell>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-Fazenda 1</TableCell>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-Fazenda 2</TableCell>
                    <TableCell style={{ width: 150, whiteSpace: 'nowrap' }}>S-Fazenda 3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const theme = useTheme();

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table" tableLayout="fixed">
          <TableHead sx={{backgroundColor: theme.palette.background.default}}>
            <TableRow>
              <TableCell style={{ width: 50 }} />
              <TableCell align="center" colSpan={2} style={{ width: 300 }}>Produtor</TableCell>
              <TableCell align="center" colSpan={2} style={{ width: 300 }}>Fazenda</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={1}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por tabela"
        sx={{
          backgroundColor: theme.palette.background.default, 
          '& .MuiTablePagination-toolbar': {
            justifyContent: 'space-between',
          },
          '& .MuiTablePagination-spacer': {
            display: 'none',
          },
          '& .MuiTablePagination-caption': {
            textAlign: 'left',
            flex: '0 0 auto',
          },
        }}
      />
    </Paper>
  );
}