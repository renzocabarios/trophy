import { IQuery } from "./types";
import { userModel } from "./models";
import { ClientSession } from "mongoose";

async function getMaxCount({ filter }: IQuery) {
  const { __t, ...res } = filter;
  return await userModel.countDocuments({ deleted: false, ...res });
}

async function getAll({
  page = 1,
  limit = 10,
  filter = {},
  populate = "",
}: IQuery) {
  const { __t, ...res } = filter;
  return await userModel
    .find({ ...res, deleted: false, __t })
    .populate(populate)
    .limit(limit * 1)
    .skip(limit == 0 ? 0 : (page - 1) * limit);
}

async function getById(_id: string) {
  return await userModel.findOne({ _id, deleted: false });
}

async function add(_body: Partial<any>, session: ClientSession) {
  return await userModel.create([_body], { session });
}

async function update(
  filter: any,
  _body: Partial<any>,
  session: ClientSession
) {
  return await userModel.findOneAndUpdate(filter, _body, {
    new: true,
    session,
  });
}

async function removeOne(filter: any, session: ClientSession) {
  return await userModel.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
}

export default { getAll, getMaxCount, getById, add, update, removeOne };
