import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  //Inputs
  @Input() rowData: any = [];

  //Outputs
  @Output() onTableActionClicked: EventEmitter<any> = new EventEmitter();

  //ViewChilds
  @ViewChild(MatPaginator) paginator: any;

  //Variables
  selection = new SelectionModel<any>(true, []);
  gridLoading: boolean = true;
  dataSource: any;
  columnDefs: any = [
    { header: 'Name', field: 'name' },
    { header: 'Gender', field: 'gender' },
  ];
  columns: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.convertInputData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  convertInputData() {
    this.dataSource = new MatTableDataSource<any>(this.rowData);
    this.columns = Object.keys(this.rowData[0]);
    this.columns.unshift('select');
    this.columns.push('options');
    console.log(this.columns);

    this.gridLoading = false;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  onIconClick(data: any, type: any) {
    let event = {
      data: data,
      type: type,
    };
    this.onTableActionClicked.emit(event);
  }
}
