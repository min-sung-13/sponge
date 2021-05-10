import Router from 'koa-router';
import * as projectandclassCtrl from './projectandclass.ctrl';
import checkLoggedIn from '../../lib/checkLoggedin';

const projectsAndClasses = new Router();
projectsAndClasses.get('/list', projectandclassCtrl.list);
projectsAndClasses.get('/', projectandclassCtrl.list);

projectsAndClasses.get('/h/', projectandclassCtrl.listByHit);
projectsAndClasses.get('/s/', projectandclassCtrl.listBySuc);
projectsAndClasses.get('/n/', projectandclassCtrl.listByNew);
projectsAndClasses.get('/j/', projectandclassCtrl.listByJu);

projectsAndClasses.post('/', projectandclassCtrl.write);
projectsAndClasses.get('/getOne/:p_addr', projectandclassCtrl.read);
projectsAndClasses.post('/patch', projectandclassCtrl.update);
projectsAndClasses.get('/:p_addr', projectandclassCtrl.read2);
projectsAndClasses.patch('/:_id', projectandclassCtrl.update2);

projectsAndClasses.patch('/check/:_id', projectandclassCtrl.check);
projectsAndClasses.patch('/check2/:_id', projectandclassCtrl.check2);
projectsAndClasses.patch('/pick/:_id', projectandclassCtrl.pick);
projectsAndClasses.patch('/pick2/:_id', projectandclassCtrl.pick2);

projectsAndClasses.delete('/:_id', projectandclassCtrl.remove);
// project.patch('/', projectCtrl.checkOwnPost, projectCtrl.update);

export default projectsAndClasses;