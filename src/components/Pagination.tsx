import React, { useState, useEffect } from "react";
import { Pagination as BPagination } from "react-bootstrap";
import { Root as ProductDisplayInterface } from "./products/ProductDisplayInterface";

type Props = {
  data: ProductDisplayInterface;
};
function Pagination({ data }: Props): JSX.Element {
  const [pageItem, setPageItem] = useState<any[]>([]);

  useEffect(() => {
    const setPagination = () => {
      let active = data.meta.pagination.current_page;
      let items: any = [];
      for (
        let number = 1;
        number <= data.meta.pagination.total_pages;
        number++
      ) {
        items.push(
          <BPagination.Item key={number} active={number === active}>
            {number}
          </BPagination.Item>
        );
      }
      setPageItem(items);
    };
    setPagination();
  }, []);

  return (
    <>
      <BPagination size="sm">{pageItem}</BPagination>
    </>
  );
}

export default Pagination;
