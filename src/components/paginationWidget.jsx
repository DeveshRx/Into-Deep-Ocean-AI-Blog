import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

class PaginationWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: Number(this.props.totalPages),
      currentPage: Number(this.props.currentPage),
    };
  }
  render() {
    var pgBtnList = [];
    console.log("totalPages: " + this.state.totalPages);

    for (let index = 0; index < this.state.totalPages; index++) {
      console.log("index++");
      var isActive = false;
      var no=index+1;
      if (Number(index + 1) == this.state.currentPage) {
        isActive = true;
      }
      pgBtnList.push(
        <PaginationItem>
          <PaginationLink href={"/posts/"+no} isActive={isActive}>
            {no}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return <React.Fragment>{pgBtnList}</React.Fragment>;
  }
}

export default PaginationWidget;
