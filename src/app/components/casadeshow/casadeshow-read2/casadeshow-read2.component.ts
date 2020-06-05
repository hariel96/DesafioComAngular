import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CasadeshowRead2DataSource, CasadeshowRead2Item } from './casadeshow-read2-datasource';

@Component({
  selector: 'app-casadeshow-read2',
  templateUrl: './casadeshow-read2.component.html',
  styleUrls: ['./casadeshow-read2.component.css']
})
export class CasadeshowRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CasadeshowRead2Item>;
  dataSource: CasadeshowRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new CasadeshowRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
