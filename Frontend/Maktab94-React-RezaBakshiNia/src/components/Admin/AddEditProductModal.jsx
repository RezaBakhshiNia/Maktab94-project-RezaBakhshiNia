import ImageUpload from "./ImageUpload";
import SelectOption from "./SelectOption";
import TextEditor from "./TextEditor";

const AddEditProductModal = () => {
  return (
    <div className="Add-Edit-container">
      <div className="Add-Edit-wrapper">
        <div>
          <span>افزودن/ویرایش کالا</span>
          <i className="bi bi-x-circle-fill" />
        </div>
        <div className="add-edit-form-wrapper">
          <form>
            <ImageUpload></ImageUpload>
            <input type="text" placeholder="نام کالا" />
            <SelectOption></SelectOption>
            <TextEditor></TextEditor>
            <button type="submit">ذخیره</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditProductModal;
