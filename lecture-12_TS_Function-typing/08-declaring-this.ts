const getDB: () => DB = () => ({
  filterUsers(filter) {
    return [];
  },
});

interface User {
  id: number;
  admin: boolean;
}

// =============================

const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
