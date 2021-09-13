
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked:  EventEmitter<any>=new EventEmitter();
  searchText: any;
  conversations= [
    {name: "Lingtan", time:"6.10PM", latestMessage:"Hi,Good Morning",latestMessageRead:false,
     messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "L10", time:"7.10PM", latestMessage:"Hi,Good night",latestMessageRead:true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Lali", time:"8.10PM", latestMessage:"Hi,Good afternoon",latestMessageRead:false,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Saran", time:"9.10PM", latestMessage:"Hi,how are you",latestMessageRead:true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Geetha", time:"1.10PM", latestMessage:"hello,Good Morning",latestMessageRead:true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Baskaran", time:"2.10PM", latestMessage:"hello,Good night",latestMessageRead:false,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Valarmathi", time:"3.10PM", latestMessage:"hello,Good afternoon",latestMessageRead:true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Prema", time:"4.10PM", latestMessage:"hello,how are you",latestMessageRead:false,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Navis", time:"5.10PM", latestMessage:"Hi,Good day",latestMessageRead: true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
    {name: "Hiltan", time:"5.10PM", latestMessage:"Hi,Good boy",latestMessageRead:true,
    messages: [
      { id: 1, body: 'Hello world', time: '8:21', me: true },
      { id: 2, body: 'How are you?', time: '8:21', me: false },
      { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    ],},
  ];
  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
