export default class Todo {
  constructor(title, description, createTime, deadline) {
    this.title = title;
    this.description = description;
    this.createTime = createTime;
    this.deadline = deadline;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {
    this.title = title;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(description) {
    this.description = description;
  }

  get getCreateTime() {
    return this.createTime;
  }

  set setCreateTime(createTime) {
    this.createTime = createTime;
  }

  get getDeadline() {
    return this.deadline;
  }

  set setDeadline() {
    this.deadline = deadline;
  }
}