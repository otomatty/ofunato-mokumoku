import { createMemo, For } from "solid-js";
import {
  PaginationContainer,
  PageButton,
  PageEllipsis,
} from "./Pagination.styled";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination = (props: PaginationProps) => {
  const maxVisiblePages = props.maxVisiblePages || 5;

  const visiblePages = createMemo(() => {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, props.currentPage - halfVisible);
    let end = Math.min(props.totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => props.onPageChange(1)}
        disabled={props.currentPage === 1}
      >
        ≪
      </PageButton>
      <PageButton
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        ＜
      </PageButton>

      {visiblePages()[0] > 1 && <PageEllipsis>...</PageEllipsis>}

      <For each={visiblePages()}>
        {(page) => (
          <PageButton
            active={page === props.currentPage}
            onClick={() => props.onPageChange(page)}
          >
            {page}
          </PageButton>
        )}
      </For>

      {visiblePages()[visiblePages().length - 1] < props.totalPages && (
        <PageEllipsis>...</PageEllipsis>
      )}

      <PageButton
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        ＞
      </PageButton>
      <PageButton
        onClick={() => props.onPageChange(props.totalPages)}
        disabled={props.currentPage === props.totalPages}
      >
        ≫
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
