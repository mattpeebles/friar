import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import FilterListIcon from "@material-ui/icons/FilterList";

function descendingComparator(a: { [x: string]: number; }, b: { [x: string]: number; }, orderBy: React.ReactText)
{
    if (b[orderBy] < a[orderBy])
    {
        return -1;
    }
    if (b[orderBy] > a[orderBy])
    {
        return 1;
    }
    return 0;
}

function getComparator(order: string, orderBy: string)
{
    return order === "desc"
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any[], comparator: { (a: any, b: any): number; (arg0: any, arg1: any): any; })
{
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: number[], b: number[]) =>
    {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el: any[]) => el[0]);
}

function EnhancedTableHead(props: { classes: any; order: any; orderBy: any; onRequestSort: any; } & Pick<ITableProps, "Rows" | "TableHeader">)
{
    const {
        classes,
        order,
        orderBy,
        onRequestSort
    } = props;
    const createSortHandler = (property: string) => (event: any) =>
    {
        onRequestSort(event, property);
    };

    let headCells = props.Rows.map(rowTitle => ({ id: rowTitle.toLowerCase(), numeric: false, disablePadding: false, label: rowTitle }));

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
    title: {
        flex: "1 1 100%"
    }
}));

const EnhancedTableToolbar = (props: { TableHeader: string }) =>
{
    const classes = useToolbarStyles();

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: false
            })}
        >
            <Typography
                className={classes.title}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {props.TableHeader}
            </Typography>

            <Tooltip title="Filter list">
                <IconButton aria-label="filter list">
                    Filter
                </IconButton>
            </Tooltip>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 750
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

export default function EnhancedTable(props: ITableProps)
{
    let rows = props.Data;
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState({});
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: any, property: React.SetStateAction<string>) =>
    {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, selected: any) =>
    {
        setSelected(selected);
        props.OnSelected(selected);
    };

    const handleChangePage = (event: any, newPage: React.SetStateAction<number>) =>
    {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) =>
    {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: { target: { checked: React.SetStateAction<boolean>; }; }) =>
    {
        setDense(event.target.checked);
    };

    const isSelected = (item: any = {}) =>
    {
        return item["table-id"] === (selected as any)["table-id"];
    }

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root} >
            <Paper className={classes.paper}>
                <EnhancedTableToolbar TableHeader={props.TableHeader} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            Rows={props.Rows}
                            TableHeader={props.TableHeader}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any, index: any) =>
                                {
                                    const isItemSelected = isSelected(row);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    row["table-id"] = index;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event: any) => handleClick(event, row)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            selected={isItemSelected}
                                        >
                                            {props.Rows.map((rowTitle, i) => <TableCell id={i === 0 ? labelId : ""} key={i} align="left">{row[rowTitle]}</TableCell>)}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
    );
};