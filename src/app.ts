import { Item } from './item';

var elem = document.getElementById('output');
var eBook = new Item('初めてのTypeScript', 2980);
eBook.say(elem);