package com.kakarote.crm9.erp.admin.entity.base;

import com.jfinal.plugin.activerecord.IBean;
import com.jfinal.plugin.activerecord.Model;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings({"serial", "unchecked"})
public abstract class BaseAdminFieldSort<M extends BaseAdminFieldSort<M>> extends Model<M> implements IBean {

	public M setId(Integer id) {
		set("id", id);
		return (M)this;
	}

	public Integer getId() {
		return getInt("id");
	}

	public M setLabel(Integer label) {
		set("label", label);
		return (M)this;
	}

	public Integer getLabel() {
		return getInt("label");
	}

	public M setFieldName(String fieldName) {
		set("field_name", fieldName);
		return (M)this;
	}

	public String getFieldName() {
		return getStr("field_name");
	}

	public M setName(String name) {
		set("name", name);
		return (M)this;
	}

	public String getName() {
		return getStr("name");
	}

	public M setSort(Integer sort) {
		set("sort", sort);
		return (M)this;
	}

	public Integer getSort() {
		return getInt("sort");
	}

	public M setUserId(Long userId) {
		set("user_id", userId);
		return (M)this;
	}

	public Long getUserId() {
		return getLong("user_id");
	}

	public M setIsHide(Integer isHide) {
		set("is_hide", isHide);
		return (M)this;
	}

	public Integer getIsHide() {
		return getInt("is_hide");
	}

	public M setFieldId(Integer fieldId) {
		set("field_id", fieldId);
		return (M)this;
	}

	public Integer getFieldId() {
		return getInt("field_id");
	}
}
