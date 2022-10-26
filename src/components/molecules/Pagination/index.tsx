import React, { FC, useCallback, useMemo } from 'react';
import Icon from '../../atoms/Icon';
import * as S from './Pagination.styled';

interface IPagination {
  page: number;
  setPage: (page: number) => void;
  itemLength: number;
  itemsPerPage: number;
}

const Pagination: FC<IPagination> = ({
  page,
  itemLength,
  itemsPerPage,
  setPage,
}) => {
  const pageCount = Math.ceil(itemLength / itemsPerPage);

  const handleChangePage = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= Math.ceil(itemLength / itemsPerPage))
        setPage(newPage);
    },
    [page],
  );
  const renderPagination = useMemo(() => {
    const pages = [];
    if (page > 1) {
      for (let i = page - 1; i < page; i += 1) {
        pages.push(i);
      }
    }

    if (page < pageCount - 1) {
      for (let i = page; i <= page + 2; i += 1) {
        pages.push(i);
      }
    } else {
      for (let i = page; i <= page + 1; i += 1) {
        if (i <= pageCount) {
          pages.push(i);
        }
      }
    }
    if (page < pageCount - 5) {
      pages.push(0);
      for (let i = pageCount - 3; i <= pageCount; i += 1) {
        pages.push(i);
      }
    }

    return (
      <>
        {pages.map((item) => {
          return item === 0 ? (
            <S.PaginationItem key={item} isActive={false}>
              ...
            </S.PaginationItem>
          ) : (
            <S.PaginationItem
              key={item}
              isActive={item === page}
              onClick={() => handleChangePage(item)}
            >
              {item}
            </S.PaginationItem>
          );
        })}
      </>
    );
  }, [page, itemLength]);

  const prevLink = useCallback(() => {
    return (
      <S.PrevNext
        disabled={page === 1}
        onClick={() => handleChangePage(page - 1)}
      >
        <Icon name="ArrowLeft" /> Prev
      </S.PrevNext>
    );
  }, [page]);

  const nextLink = useCallback(() => {
    if (page >= pageCount) {
      return null;
    }

    return (
      <S.PrevNext onClick={() => handleChangePage(page + 1)}>
        Next <Icon name="ArrowLeft" />
      </S.PrevNext>
    );
  }, [page]);

  if (itemsPerPage > itemLength) {
    return null;
  }
  return (
    <S.PaginationWrapper>
      {prevLink()}
      {renderPagination}
      {nextLink()}
    </S.PaginationWrapper>
  );
};

export default Pagination;
