import { Component, OnInit } from '@angular/core';
import { MatrixCommon } from '../matrix-common';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'matrix-mini',
  templateUrl: './matrix-mini.component.html',
  styleUrls: ['./matrix-mini.component.scss']
})
export class MatrixMiniComponent extends MatrixCommon implements OnInit  {

    constructor(configService: ConfigService) { 
        super(configService);
    }

    ngOnInit() {}
}
