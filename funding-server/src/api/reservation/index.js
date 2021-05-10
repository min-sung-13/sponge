import Router from 'koa-router';
import * as reservationCtrl from './Reservation.ctrl';

const book = new Router();

book.get('/', reservationCtrl.list);
book.post('/', reservationCtrl.book);
book.get('/delete/:_id', reservationCtrl.remove);
book.get('/:id', reservationCtrl.checkObjectId, reservationCtrl.read);
book.patch('/:id', reservationCtrl.checkObjectId, reservationCtrl.update);


export default book; 