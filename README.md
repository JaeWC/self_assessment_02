# Precourse Self-Assessment

## Guidelines

- Self-assessments 를 하면서 최근에 학습한 부분들을 얼마나 잘 이해했는지 판단할 수 있습니다.
- 모든 self-assessments 는 완료후 반드시 pull request 를 해야 합니다(아래 가이드라인 참고). 배정된 시간에서 pull request 를 할 시간을 꼭 가지길 바랍니다.
- TIP: 요구되지 않는 테스트를 작성하는데 많은 시간을 들이지 마시기 바랍니다. 대신 Chrome Console 을 활용해서 빠르고 쉽게 작성한 코드를 테스트할 수 있습니다.


## Grading Outline

- [ complete ] underbar-map
- [ complete ] underbar-uniq
- [ complete ] underbar-memoize
- [ complete ] underbar-extend
- [ complete ] sumConsecutives
- [ complete ] isAgeDiverse

## Self-Grading Process

각각의 prompt 를 완료한 후, `README.md` 파일을 수정해서 grade 를 작성하시면 됩니다. 위의 Grading Outline 섹션의 [ ] 에 grade 를 스스로 매기시길 바랍니다. ([Grading Scale](/Assessments.md) 를 참고)

## Javascript Syntax Check

`syntaxalyze.html` 이 포함되어 있습니다. 브라우저에서 `syntaxalyze.html` 을 열고 solution files 을 그 페이지에 드래그해서 놓으면 syntax check 를 합니다. 에러들이 나오면 모두 수정하시기 바랍니다. 에러들이 수정됐는지 알기 위해서는 solution files 을 매번 다시 드래그 해야합니다.(단순히 refresh 하는 것으로는 체크할 수 없습니다.)

## Submitting Solutions

**VERY IMPORTANT: solutions 을 제출하기 전에, 모든 syntax erros 를 수정하시기 바랍니다.**

Solutions 은 [Pull Request](https://help.github.com/articles/using-pull-requests) 를 활용해서 제출합니다.

Follow these steps:

1. 자신이 fork 한 repository 에서 `New pull request` 를 클릭합니다.
2. Pull Request comment block 에 완료된 Grading Outline 을 복사해서 붙여넣습니다.
3. `Create pull request` 를 클릭합니다.

---

## map
Return the results of applying an iterator to each element in a collection.

* [ ] Implement a `_.map` function

## unique
Return a duplicate-free version of the collection.

* [ ] Implement `_.uniq` function

## memoize
Return a function that, when called, will check if it has
already computed the result for the given argument and return the precomputed  value instead when possible.

* [ ] Implement an `_.memoize` function

## extend
Extend a given object with all the properties of the passed in object(s).

* [ ] Implement an `.extend` function

## sumConsecutives
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

* [ complete ] Implement an 'sumConsecutives' function

## isAgeDiverse
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.

* [ complete ] Implement an 'isAgeDiverse' function
