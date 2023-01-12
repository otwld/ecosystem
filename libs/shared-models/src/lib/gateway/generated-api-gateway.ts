import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
}

export interface ListMemberPage {
  __typename?: 'ListMemberPage';
  edges: Array<Maybe<PaginatedMemberPageEdge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
}

export interface Member {
  __typename?: 'Member';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface MemberOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListMembersInputSortFields>;
}

export interface PageInfo {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
}

export interface PaginatedMemberPageEdge {
  __typename?: 'PaginatedMemberPageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Member>;
}

export interface PaginationOption {
  after?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  getMemberById: Member;
  getMembers: ListMemberPage;
}


export interface QueryGetMemberByIdArgs {
  id: Scalars['String'];
}


export interface QueryGetMembersArgs {
  order?: InputMaybe<MemberOrderBy>;
  pagination: PaginationOption;
}

export enum EDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum EListMembersInputSortFields {
  FirstName = 'firstName'
}

export type GetMembersPaginatedQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetMembersPaginatedQuery = { __typename?: 'Query', getMembers: { __typename?: 'ListMemberPage', edges: Array<{ __typename?: 'PaginatedMemberPageEdge', node?: { __typename?: 'Member', _id: string, createdAt: any, updatedAt: string, firstName: string } | null } | null>, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } | null } };

export const GetMembersPaginatedDocument = gql`
    query getMembersPaginated($pagination: PaginationOption!) {
  getMembers(pagination: $pagination) {
    edges {
      node {
        _id
        firstName
      }
    }
    pageInfo {
      hasNextPage
      hasPrevPage
      startCursor
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMembersPaginatedGQL extends Apollo.Query<GetMembersPaginatedQuery, GetMembersPaginatedQueryVariables> {
    override document = GetMembersPaginatedDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
