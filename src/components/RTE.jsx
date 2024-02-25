"use client"
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div>
      <h5 className="inline-block font-bold text-xl border-s-4 text-lime-950 border-lime-950/50 border-e-4 rounded-2xl px-5 py-1 mb-3">{label && <label className="inline-block mb-1 pl-1">{label}</label>}</h5>
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onchange } }) => (
          <Editor
            apiKey="gjdyj04astjpgoa3eqfj9bhpox4fti2o5y936o4z7pou44lo"
            initialValue="<p>You can write you blog here...</p>"
            init={{
              initialValue:defaultValue,
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onchange}
          />
        )}
      />
    </div>
  );
}
