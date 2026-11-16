import css from './Pagination.module.css';
import ReactPaginateModule from 'react-paginate';
// import ReactPaginate from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import type { ComponentType } from 'react';

// type ModuleWithDefault<T> = { default: T };

// const ReactPaginate = (
//   ReactPaginateModule as unknown as ModuleWithDefault<
//     ComponentType<ReactPaginateProps>
//   >
// ).default;

const ReactPaginate = (
  (ReactPaginateModule as any).default || 
  ReactPaginateModule
) as ComponentType<ReactPaginateProps>;

interface PaginationProps {
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  onPageChange: (nextPage: number) => void;
  forcePage: number;
  containerClassName?: string;
  activeClassName?: string;
  nextLabel?: string;
  previousLabel?: string;
}

export default function Pagination(props: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={props.pageCount}
      pageRangeDisplayed={props.pageRangeDisplayed}
      marginPagesDisplayed={props.marginPagesDisplayed}
      onPageChange={({ selected }) => props.onPageChange(selected + 1)}
      forcePage={props.forcePage > 0 ? props.forcePage - 1 : 0}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
