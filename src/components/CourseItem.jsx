// [제공] 부모 CourseList로부터 Props를 전달받는 자식 컴포넌트입니다.
export default function CourseItem({ course, onDelete, onToggle }) {
  return (
    <div className="course-row">
      <div className="course-main">
        <input
          className="check"
          type="checkbox"
          checked={course.completed}
          onChange={() => onToggle(course.id)}
          aria-label={`${course.name} 완료 여부`}
        />
        <div>
          <div className={`course-title ${course.completed ? "done" : ""}`}>
            {course.name}
          </div>
          <div className="course-id">Course #{course.id}</div>
        </div>
      </div>
      <div className="category-cell">
        <span className="category">{course.category}</span>
      </div>
      <div className="actions">
        <button
          className="btn danger"
          type="button"
          onClick={() => onDelete(course.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
