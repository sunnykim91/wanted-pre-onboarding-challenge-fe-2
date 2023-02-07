// @ts-check

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - 할일 id
 * @property {string} content - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * <ul>
 *  <li>할 일을 추가할 수 있다.</li>
 *  <li>내용없이 추가할 수 없다.</li>
 * </ul>
 * @param {string} content - 할일 내용
 * @param {string} category - 카테고리
 * @param {string} [tags] - 태그들
 */
function createTodo(content, category, tags) {
    // TODO
}

/**
 * <ul>
 *  <li>모든 할 일을 조회할 수 있다.</li>
 *  <li>ID를 기반으로 특정 할 일을 조회할 수 있다.</li>
 * </ul>
 * @param {string} id - 할일 ID
 */
function readTodo(id) {
    // TODO
}

/**
 * <ul>
 *  <li>ID를 제외한 모든 속성을 수정할 수 있다.</li>
 *  <li>특정 할 일의 특정 태그를 수정할 수 있다.</li>
 * </ul>
 * @param {string} id - 할일 ID
 * @param {string} content - 할일 내용
 * @param {string} category - 카테고리
 * @param {string} [tags] - 태그들
 */
function updateTodo(id, content, category, tags) {
    // TODO
}

/**
 * <ul>
 *  <li>ID를 기반으로 특정 할 일을 삭제할 수 있다.</li>
 *  <li>모든 할 일을 제거할 수 있다.</li>
 *  <li>특정 할 일의 특정 태그를 삭제할 수 있다.</li>
 *  <li>특정 할 일의 모든 태그를 제거할 수 있다.</li>
 * </ul>
 * @param {number} id - 할일 ID
 */
function deleteTodo(id) {
    // TODO
}
