import { removeExportQueryParam } from "../static-query-mapper"

const post = `/Users/dolores/project/post.tsx`

describe(`removeExportQueryParam`, () => {
  it(`should pass through path if it does not contain query param`, () => {
    expect(removeExportQueryParam(post)).toEqual(post)
  })
  it(`should pass through __contentFilePath`, () => {
    const path = `${post}?__contentFilePath=/Users/dolores/project/file.mdx`
    expect(removeExportQueryParam(path)).toEqual(path)
  })
  it(`should remove ?export=default`, () => {
    expect(removeExportQueryParam(`${post}?export=default`)).toEqual(post)
  })
  it(`should remove ?export=head`, () => {
    expect(removeExportQueryParam(`${post}?export=head`)).toEqual(post)
  })
  it(`should remove export but keep __contentFilePath`, () => {
    expect(
      removeExportQueryParam(
        `${post}?__contentFilePath=/Users/dolores/project/file.mdx&export=default`
      )
    ).toEqual(`${post}?__contentFilePath=/Users/dolores/project/file.mdx`)
    expect(
      removeExportQueryParam(
        `${post}?__contentFilePath=/Users/dolores/project/file.mdx&export=head`
      )
    ).toEqual(`${post}?__contentFilePath=/Users/dolores/project/file.mdx`)
  })
})
