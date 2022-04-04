// import React, { useState, useEffect } from "react";
// import { Pagination as BPagination } from "react-bootstrap";
// import { Root as ProductDisplayInterface } from "./products/ProductDisplayInterface";

// type Props = {
//   data: ProductDisplayInterface;
// };
// function Pagination({ data }: Props): JSX.Element {
//   const [pageItem, setPageItem] = useState<any[]>([]);

//   useEffect(() => {
//     const setPagination = () => {
//       let active = data.meta.pagination.current_page;
//       let items: any = [];
//       for (
//         let number = 1;
//         number <= data.meta.pagination.total_pages;
//         number++
//       ) {
//         items.push(
//           <BPagination.Item key={number} active={number === active}>
//             {number}
//           </BPagination.Item>
//         );
//       }
//       setPageItem(items);
//     };
//     setPagination();
//   }, []);

//   return (
//     <>
//       <BPagination size="sm">{pageItem}</BPagination>
//     </>
//   );
// }
import { FC } from "react";
import { Link } from "react-router-dom";

export const Pagination: FC = () => {
  return (
    <nav className="numbering">
      <ul className="pagination paging">
        <li>
          <Link to="#" aria-label="Previous">
            <span aria-hidden="true"></span>
          </Link>
        </li>
        <li className="active">
          <Link to="#">
            1<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li>
          <Link to="#">2</Link>
        </li>
        <li>
          <Link to="#">3</Link>
        </li>
        <li>
          <Link to="#">4</Link>
        </li>
        <li>
          <Link to="#">5</Link>
        </li>
        <li>
          <Link to="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
