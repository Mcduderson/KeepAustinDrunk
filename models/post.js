module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post",
      {
        Location: {
          type: DataTypes.STRING(100),
          validation: {
            notEmpty: true,
            notNull: true,
          }
        },
        Body: {
          type: DataTypes.STRING(300),
          validation: {
            len: [313],
            notEmpty: true,
            notNull: true,
          }
        }
      }
    );
  
    Post.associate = function(models) {
  
      Post.belongsTo(models.User, {
        foreignKey: // "UserID"
        {
          allowNull: false
        }
      });
    };
  
    return Post;
  };