// root saga = 다른 saga들을 합쳐주는 역할

import { fork } from "@redux-saga/core/effects";
import contactSaga from "./contact";
import todoSaga from "./todo-paging";
import seaCommentSaga from "./sea-comment-paging";

export default function* rootSaga() {
	yield fork(todoSaga);
	yield fork(contactSaga);
	yield fork(seaCommentSaga);
}
