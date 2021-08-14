import { Component, OnInit } from '@angular/core';
import { AGR, CSN, EST, EXT, OPN } from '../global';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  agr = '';
  csn = '';
  ext = '';
  est = '';
  opn = '';

  constructor(private storageService: LocalStorageService) {}

  ngOnInit(): void {
    this.storageService.changed().subscribe((_) => {
      this.agr = this.storageService.getItem(AGR);
      this.csn = this.storageService.getItem(CSN);
      this.ext = this.storageService.getItem(EXT);
      this.est = this.storageService.getItem(EST);
      this.opn = this.storageService.getItem(OPN);
    });
  }
}
