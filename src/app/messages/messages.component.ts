import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; // 載入可以做處存文字的component

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {} // 這些都是公用屬性

  ngOnInit() {
  }

}
