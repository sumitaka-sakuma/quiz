<?php

namespace App\Admin\Controllers;

use App\Quiz;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Category;
use App\Answer;

class QuizController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Quiz';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Quiz());

        $grid->column('id', __('Id'));
        $grid->column('title', __('Title'));
        $grid->column('image_src', __('Image src'));
        $grid->column('answer.answer_1',  __('Answer 1'));
        $grid->column('answer.answer_2',  __('Answer 2'));
        $grid->column('answer.answer_3',  __('Answer 3'));
        $grid->column('answer.answer_4',  __('Answer 4'));
        $grid->column('category.name', __('Categories name'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Quiz::findOrFail($id));

        $show->answer('Answer information', function ($answer) {
            $answer->id();
            $answer->answer_1();
            $answer->answer_2();
            $answer->answer_3();
            $answer->answer_4();
            $answer->commentary();
          });
      
          $show->category('Category information', function ($category) {
            $category->name();
          });

        $show->field('id', __('Id'));
        $show->field('title', __('Title'));
        $show->field('image_src', __('Image src'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Quiz());

        $form->textarea('title', __('Title'));
        $form->text('image_src', __('Image src'));
        $form->number('answers_id', __('Answers id'));
        $form->number('categories_id', __('Categories id'));

        return $form;
    }
}
